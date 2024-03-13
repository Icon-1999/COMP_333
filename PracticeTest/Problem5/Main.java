public class Main {
    public static void printResult (final Runner r, final int i){
        boolean result = r.someMethod(i);
        System.out.println(result);
    }

    public static void main(String[] args) {
        final IsEven even = new IsEven();
        printResult(even, 3);
        printResult(even, 4);

        final IsLessThan ItFive = new IsLessThan(5);
        printResult(ItFive, 4);
        printResult(ItFive, 6);

        final IsLessThan ItZero = new IsLessThan(0);
        printResult(ItZero, -1);
        printResult(ItZero, 1);
    }
}
