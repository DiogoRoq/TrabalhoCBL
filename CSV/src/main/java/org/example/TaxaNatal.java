package CSV.src.main.java.org.example;

public class TaxaNatal {
    private int Anos;
    private String valor;

    public TaxaNatal(int Ano, String valor) {
        this.Anos = Ano;
        this.valor = valor;
    }

    // Getters e Setters aqui

    @Override
    public String toString() {
        return "Taxa de Natalidade {" +
                "Ano = " + Anos +
                ", taxa = '" + valor + '\'' +
                '}';
    }
}