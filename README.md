# wing-use-auth

> The auth hook for react

## Install

```bash
$ yarn add wing-use-auth

# or

$ npm install wing-use-auth
```

## Import

```js
import useAuth, { AuthProvider } from "wing-use-auth";
```

## Usage

```js
// App.js

import { AuthProvider } from "wing-use-auth";

export default function App() {
  return (
    <AuthProvider option={{ initialState: false }}>
      <ExamplePage />
    </AuthProvider>
  );
}
```

```js
// ExamplePage.js

import useAuth from "wing-use-auth";

function ExamplePage() {
  const auth = useAuth();
  const login = () => {
    auth.signin(() => {
      // do something here
      // such as: set storage/cookie
      console.log("Logged in");
    });
  };
  return (
    <div>
      {auth.authenticated ? (
        <h1>You have authenticated</h1>
      ) : (
        <div>
          You have not logged in yet，<button onClick={login}>Log In</button>
        </div>
      )}
    </div>
  );
}
```
