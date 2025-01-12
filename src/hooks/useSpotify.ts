import {
  SdkOptions,
  SpotifyApi,
  AuthorizationCodeWithPKCEStrategy,
} from "@spotify/web-api-ts-sdk";
import { useState, useRef, useCallback, useEffect } from "react";

export function useSpotify(
  clientId: string,
  redirectUrl: string,
  scopes: string[],
  config?: SdkOptions
) {
  const [sdk, setSdk] = useState<SpotifyApi | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<Error | null>(null); // Fehler-Handling
  const { current: activeScopes } = useRef(scopes);

  const authorize = useCallback(async () => {
    const auth = new AuthorizationCodeWithPKCEStrategy(
      clientId,
      redirectUrl,
      activeScopes
    );
    const internalSdk = new SpotifyApi(auth, config);

    try {
      const { authenticated } = await internalSdk.authenticate();
      if (authenticated) {
        setSdk(() => internalSdk);
        setIsAuthenticated(true);
      } else {
        setAuthError(new Error("Authentication failed"));
      }
    } catch (e) {
      setAuthError(e as Error);
      console.error("Authentication error:", e);
    }
  }, [clientId, redirectUrl, config, activeScopes]);

  useEffect(() => {
    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    const error = url.searchParams.get("error");

    if (code || error) {
      authorize();
    }
  }, [authorize]);

  return { sdk, isAuthenticated, authorize, authError };
}
