import java.util.ArrayList;

public class Order{
    private String name;
    private boolean ready;
    private ArrayList<Item> items = new ArrayList<Item>();

    public Order(){
        this.name = "guest";
        this.ready = false;
    };

    public Order(String name){
        this.name = name;
        this.ready = false;
    }

    // Getters

    public String getName(){
        return this.name;
    }

    public boolean getReady(){
        return this.ready;
    }

    public void getItems(){
        for (int i = 0; i < items.size(); i++){
            System.out.print(items.get(i));
        }
    }

    // Setters

    public void setName(String name){
        this.name = name;
    }

    public void setReady(boolean ready){
        this.ready = ready;
    }

    public void setItems(ArrayList<Item> items){
        this.items = items;
    }

    // action fuctins
    
    public void addItem(Item item){
        this.items.add(item);
    }

}
