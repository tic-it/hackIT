//Function with no return type but argument 
//WAP to find sum of two numbers.
#include<stdio.h>
#include<conio.h>
void sum(int, int);
void sum(int p, int q)
{
  int s;
  s=p+q;
  printf("Sum of two number is : %d ",s);
}
int main()
{
  int a,b; //calling function
  printf("Enter the numbers:");
  scanf("%d%d", &a, &b);
  sum(a,b);
  return 0;
}
