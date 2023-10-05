#include<stdio.h>
void main()
{
	int a, b=0, n, t;
	printf("Enter a number:");
	scanf("%d",&n);
	t=n;
	while(n>0)
	{
		a=n%10;
		b=b+a*a*a;
		n=n/10;
	}
	if(b==t)
	{
		printf("It is armstrong");
	}
	else
	{
		printf("It is not");
	}
	getch();
}
