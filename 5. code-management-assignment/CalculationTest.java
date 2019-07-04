import static org.hamcrest.MatcherAssert.assertThat;
import org.junit.runner.RunWith;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(SpringRunner.class)
public class CalculationTest()
{
	
private Calculation calculation = new Calculation();
int a;
int b;

@Before 
public void loadRequiredVariables(){
	a = 6;
	b = 4;
}

@Test
public void thatShouldReturnCalculatedValueWhenRequiredVariablesAreSupplied(){
	
	int expValAfterAdding = 10;
	int actualValue = calculation.add(a,b);
	assertThat(actualValue, is(expValAfterAdding));
	
	int expValAfterSubtraction = 2;
	actualValue = calculation.sub(a,b);
	assertThat(actualValue, is(expValAfterSubtraction));
	
}

}
