export const onSignInRequest = (self) => {
  const GoogleAuth = window.gapi.auth2.GoogleAuth;
  if (!self.state.isSignedIn) {
    GoogleAuth.isSignedIn.listen((isSignedIn) => updateSigninStatus(self, isSignedIn))
    GoogleAuth.signIn({
      prompt: 'select_account'
    }).then(GoogleUser => {
      const basicProfile = GoogleUser.getBasicProfile()
      self.setState({
        user: {
          id: basicProfile.getId(),
          name: basicProfile.getName()
        }
      })
    }).then(() => self.setState({ isSignedIn: true }))
      .catch(error => console.log(error))
  } else {
    GoogleAuth.signOut().then(() =>
      self.setState({
        isSignedIn: false,
        status: 'You were logged out.'
      })
    )
  }
}

export const updateSigninStatus = (self, isSignedIn) => {
  if (isSignedIn) {
    self.setState({ isSignedIn })
  }
}
