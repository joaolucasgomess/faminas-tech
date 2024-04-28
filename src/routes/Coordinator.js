export const goToStartPage = (navigate) => {
    navigate('/')
}

export const goToHomeTestPage = (navigate) => {
    navigate('/homeTest')
}


export const goToSingUpPage = navigate => {
    navigate('/singup')
}
export const goToSingUpAluno = navigate => {
    navigate('/singup/aluno')
}
export const goToSingUpEmpresa = navigate => {
    navigate('/singup/empresa')
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