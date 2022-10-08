public class BarristaTest {
    public static void main(String[] args){
        Item item1 = new Item("beans", 9.99);
        Item item2 = new Item("Blueberries", 4.99);
        Item item3 = new Item("coffee with Blood", 100.69);

        Order order1 = new Order("Tim");

        order1.addItem(item3);
        order1.addItem(item2);
        order1.addItem(item1);

        System.out.println("The name of the order is: " + order1.getName());
        order1.getItems();
    }
}
