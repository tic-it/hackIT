#include<stdio.h>
struct student 
{
	char name[20];
	int roll;
	float marks;
	char remarks;
};
int main()
{
	struct student s[15];
	int i;
	float temp;
	printf("the size of struct:%d bytes",sizeof(struct student));
	for(i=0;i<5;i++)
	{
		printf("\n Enter information about student%d",i+1);
		printf("\nName:\t");
		scanf(" %s",s[i].name);
		printf("\nRoll:\t");
		scanf ("%d", &s[i]. roll);
		printf("\nMarks: \t");
		scanf ("%f",&s[i]. marks);
		printf("\nRemarks(P/F):\t");
		s[i].remarks=getche();

}
printf("\n");
printf("\nStudent name\tRoll\tMarks\t\tRemarks");
for(i=0;1<5;i++)
{
printf("\n%s\t\t %d\t%f\t%c\n", s[i]. name, s[i].roll, s[i].marks,
s[i].remarks);
}
return 0;


	
}
