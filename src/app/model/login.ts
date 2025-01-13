export interface Endpoint {
  type: string;
  url: string;
}

export interface Login {
  authentication_endpoints: Endpoint[];
  customer_id: string;
  customersimulator_url: string;
  mqtt_topic_prefix: string;
  profile: string;
  region: string;
  user_pool_client_id: string;
  user_pool_id: string;
  websocket_url: string;
}

export interface AuthenticationResult {
  AccessToken: string;
  ExpiresIn: number;
  IdToken: string;
  RefreshToken: string;
  TokenType: string;
}

export interface ChallengeParameters {}

export interface AuthenticationResponse {
  AuthenticationResult: AuthenticationResult;
  ChallengeParameters: ChallengeParameters;
}
