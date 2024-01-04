package org.example;
import java.util.List;
import com.google.gson.Gson;

public class Main {
    public static void main(String[] args) {
        CSVReader csvReader = new CSVReader();
        csvReader.readCSV("C:/Users/godi/Desktop/Taxa_de_Natalidade_.csv");

        // Imprime os produtos para verificar se foram lidos corretamente
        for (TaxaNatal taxanatal : csvReader.getData()) {
            System.out.println(taxanatal);
        }

        List<TaxaNatal> taxasnatal = csvReader.getData();
        Gson gson = new Gson();
        String jsonTaxas = gson.toJson(taxasnatal);
        JsonFileWriter.escreverJsonEmArquivo(jsonTaxas, "C:/Users/godi/Desktop/vazio.json");
    }



    }
