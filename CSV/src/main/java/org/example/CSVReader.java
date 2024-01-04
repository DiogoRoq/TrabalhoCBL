package CSV.src.main.java.org.example;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class CSVReader {
    private List<TaxaNatal> data;

    public CSVReader() {
        this.data = new ArrayList<>();
    }

    public void readCSV(String filePath) {
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] values = line.split(";");
                int Anos = Integer.parseInt(values[0]);
                String valor = values[1];


                TaxaNatal taxanatal = new TaxaNatal(Anos, valor);
                data.add(taxanatal);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public List<TaxaNatal> getData() {
        return data;
    }
}







