package CSV.src.main.java.org.example;

import java.io.FileWriter;
import java.io.IOException;

public class JsonFileWriter {
    public static void escreverJsonEmArquivo(String json, String caminhoArquivo) {
        try (FileWriter fileWriter = new FileWriter(caminhoArquivo)) {
            fileWriter.write(json);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}