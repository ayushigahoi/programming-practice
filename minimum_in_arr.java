public class minimum_in_arr {
    public static void main(String[] args) {
        int arr[]={3,1,6,2,0};
        int min =arr[0];
        for(int i=1;i<arr.length;i++){
            if ( min>arr[i]) {
                min=arr[i];
         
            }
           
        }
         System.out.println(min);
    }
}
