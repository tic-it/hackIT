//Function with argument and return type
//WAP to find division of two numbers.
#include<stdio.h>
#include<conio.h>
int div(int,int);
void main()
{
	int a,b,d;
	printf("Enter two numbers : ");
	scanf("%d%d",&a,&b);
	d=div(a,b); //calling function
	printf("Division of two number is : %d ",d);
	getch();
}
int div(int x, int y)
{
	int d;
	d=x/y;
	return d;
}
