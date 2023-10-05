//In this method of function call in which the value of actual is passed to the called function from calling function
#include<stdio.h>

void swap(int , int);
void swap(int p, int q)
{
	int temp;
	temp =p ;
	p=q;
	q=temp;

}
int main ()
{
	int a,b;
	printf("Enter the numbers");
	scanf("%d %d",&a,&b);
	printf("Before calling the function swap a=%d and b=%d", a,b);
	swap(a,b);
	printf("After calling the function swap a=%d and b=%d", a,b);
	return 0;
}
