#include <stdio.h>

int main(void) {
   int num=10;
   int *ptr1=&num;
   int *ptr2=ptr1;
   (*ptr1)++;
   (*ptr2)+=5;
   int result=num;
   printf("%d", result--);
   return 0;
}