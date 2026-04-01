import java.util.Scanner;


public class binary_to_decimal {

    public static int BinNum(int n){
         int decnum=0;
         int pow=0;
         while (n>0) {
            int lastdigit= n%10;
            decnum=(lastdigit* (int)Math.pow(2, pow));
            pow++;
         n=n/10;
         }
         return decnum;

    }
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.println("enter a binary number");
        int n = sc.nextInt();
        System.out.println(BinNum(n));
    }
}