import java.util.Random;
public class BankAccount{
    public static int numAccounts = 0;
    public static double totalBalance = 0;

    private double checkingBalance = 0;
    private double savingsBalance = 0;
    private int accountNumber;

    public BankAccount(){
        BankAccount.numAccounts += 1;
        this.checkingBalance = 0;
        this.savingsBalance = 0;
        this.accountNumber = BankAccount.generateId();
    }

    private static int generateId(){
        Random random = new Random();
        int randomId = random.nextInt (1000000000) + 999999999;
        return randomId;
    }

    public void deposite(double deposite, String accountType) {
        if (accountType.toLowerCase().equals("savings")){
            this.savingsBalance += deposite;
        }
        else if(accountType.toLowerCase().equals("checking")){
            this.checkingBalance += deposite;
        }
        BankAccount.totalBalance += deposite;
    }

    public void widthdraw(double amount, String accountType){
        if (accountType.toLowerCase().equals("savings") && this.savingsBalance - amount > 0){
            this.savingsBalance -= amount;
        }
        else if(accountType.toLowerCase().equals("checking") && this.checkingBalance - amount > 0){
            this.checkingBalance -= amount;
        }
        BankAccount.totalBalance -= amount;
    }

    public double seeTotal(){
        double total = 0;
        total = this.savingsBalance + this.checkingBalance;
        return total;
    }
}