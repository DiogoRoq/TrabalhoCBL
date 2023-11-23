import java.nio.file.Files; // Importa a classe Files do pacote java.nio.file
import java.nio.file.Paths;// Importa a classe Paths do pacote java.nio.file. 
import java.io.IOException;


public class cssClone { 

    public static void cloneCss(String sourcePath, String destinationPath) { 
        try {
            byte[] css = Files.readAllBytes(Paths.get(sourcePath));

            Files.write(Paths.get(destinationPath), css); // escreve o novo arquivo css 
        } 
        catch (IOException e) {
            e.printStackTrace();// mostra o rastreamento feito
        }
    }

    public static void main(String[] args) {
        String sourceCss = "C:\\Users\\lucca\\OneDrive\\Ambiente de Trabalho\\Java_WorkSpace\\Dashboard\\styles.css"; // caminho de onde vai buscar
        String newCss = "C:\\Users\\lucca\\OneDrive\\Ambiente de Trabalho\\Java_WorkSpace\\Dashboard\\styles2.css"; // local destino para o novo documento em css

        cloneCss(sourceCss, newCss);
        System.out.println("CSS clonado com sucesso!"); // um print para mostrar que foi feito com sucesso
    }
}
