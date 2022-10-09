public class Gorilla{
    
    private String name;
    private int energy = 100;

    public void throwBanana(){
        energy -= 5;
    }

    public void climb(){
        energy -= 10;
    }

    public void eatBananas(){
        energy += 10;
    }
}
