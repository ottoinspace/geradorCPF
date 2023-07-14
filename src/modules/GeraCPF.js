import ValidaCPF from "./validaCPF";

export default class GeraCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(math.random() * (max - min) + min));
    }

    geraNovoCPF() {
        const cpfSemDigito = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1);
        const novoCPF = cpfSemDigito + digito1 + digito2;
        return novoCPF;
    }
}