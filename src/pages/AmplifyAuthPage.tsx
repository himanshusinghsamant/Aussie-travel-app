import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const AmplifyAuthPage = () => (
  <Authenticator>
    {({ signOut, user }) => (
      <main style={{ padding: 32, textAlign: 'center' }}>
        <h1>Welcome, {user?.username}!</h1>
        <button onClick={signOut} style={{ marginTop: 24 }}>Sign out</button>
      </main>
    )}
  </Authenticator>
);

export default AmplifyAuthPage;
