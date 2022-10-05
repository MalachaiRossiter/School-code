public class BankAccountTest {
    public static void main(String[] args){
        BankAccount account = new BankAccount();
        account.deposite(100.20, "savings");
        account.widthdraw(2.30, "savings");
        System.out.println(account.seeTotal());
    }
}
