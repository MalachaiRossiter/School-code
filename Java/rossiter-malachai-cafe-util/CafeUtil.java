import java.util.ArrayList;

public class CafeUtil {
    public int getStreak() {
        int[] streak = {1,2,3,4,5,6,7,8,9,10};
        int count = 0;
        for (int i = 0; i <= streak.length; i++){
            count = count + i;
        }
        return count;
    }

    public int getTotal(){
        double[] cost = {3.34,9.45,2.74,4.20,6.90};
        int total = 0;
        for (int i = 0; i <= cost.length; i++){
            total = total + i;
        }
        return total;
    }

    public String getMenu(){
        String[] menue = {"tomatoes", "bread", "Not coffee", "apples"};
        for (int i = 0; i < menue.length; i ++){
            System.out.printf("%s %s \n", i, menue[i]);
        }
        return null;
    }

    public void addCustomer(ArrayList<String> customer){
        System.out.println("Please enter your name: ");
        String name = System.console().readLine();
        System.out.println("Hello " + name);
        System.out.printf("There are %s people ahead of you.", customer.size());
        customer.add(name);
        System.out.print(customer);
    }
}
