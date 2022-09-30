import java.util.ArrayList;
import java.util.Arrays;
public class TestCafe{
    public static void main(String[] args){
        CafeUtil cafeUtil = new CafeUtil();
        System.out.println("Streak Goal Test");
        System.out.println("Purchases needed by week 10: " + cafeUtil.getStreak());

        System.out.println("Your total is: " + cafeUtil.getTotal());

        System.out.println("Display Menu Test");
        cafeUtil.getMenu();

        ArrayList<String> customer = new ArrayList<String>();
        cafeUtil.addCustomer(customer);
    }
}
