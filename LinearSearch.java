public class LinearSearch {

        public static  int linaersearch(int numbers[],int key){
            for(int i=0; i<numbers.length; i++){
            if(numbers[i]==key){
                return i;
            }
        }
        return -1;
        }
    public static void main(String[] args) {
        int numbers[]={ 30,3,98,50,21};
        int key=40;

        int index=linaersearch(numbers, key);
        if(index==-1){
            System.out.println("key not found");
    
        }
        else{
            System.out.println("key found :" +index);
        }
    }
}
