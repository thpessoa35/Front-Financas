class RegisterValidator {

    public validateName(name: string): boolean {
        return name.length > 0;
    }

    public validateEmail(email: string): boolean {
        return /\S+@\S+\.\S+/.test(email); 
    }
}

export default RegisterValidator;
