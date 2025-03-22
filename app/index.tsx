import { Redirect } from 'expo-router';

export default function Index() {
  // For now, we'll redirect to the auth flow
  // In a real app, you would check the authentication state here
  return <Redirect href="/(auth)/login" />;
} 