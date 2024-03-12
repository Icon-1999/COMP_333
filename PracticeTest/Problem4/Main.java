public class Main {
    public static void main(String[] args) {
        Operation op1 = new AddOperation();
        Operation op2 = new SubtractOperation();
        int res1 = op1.doOp(5, 3);
        int res2 = op2.doOp(5, 3);
        System.out.println(res1);
        System.out.println(res2);
    }
}
