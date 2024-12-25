#include <stddef.h>
#include <stdio.h>
#include<stdlib.h>
#include<string.h>
#include<unistd.h>

int main()
{

printf("first \n");

if(fork() || (fork()&& !fork()))
    printf("hello \n");

    printf("hello it's me %s \n",getlogin());
    
}