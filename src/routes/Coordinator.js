export const goToStartPage = (navigate) => {
    navigate('/')
}

export const goToSignUpPage = navigate => {
    navigate('/signup')
}
export const goToSignUpAluno = navigate => {
    navigate('/signup/aluno')
}
export const goToSignUpEmpresa = navigate => {
    navigate('/signup/empresa')
}
  
export const goToLoginPage = (navigate) => {
    navigate('/login')
}

export const goToHomePage = (navigate) => {
    navigate('/home')
}

  
export const goToFeedbackPage = (navigate) => {
    navigate('/feedback')
}

export const goToAboutPage = (navigate) => {
    navigate('/about')
}
  
export const goBack = (navigate) => {
    navigate(-1)
}