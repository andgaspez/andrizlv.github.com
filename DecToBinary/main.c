#include <stdio.h>
#include "funcs.h"

int main(void){
    int i, NumberBackup;

    i=5978;
    
    int vector[getNumberBitsSize(i)];
    
    NumberBackup = i;

    for(int k=0; k < getNumberBitsSize(i); k++){
        vector[k]= NumberBackup % 2;
        printf("%i", vector[k]);
        NumberBackup /= 2;
    }

    reverse(vector, getNumberBitsSize(i));

    printf("\nbits: %i\ni:%i\n", getNumberBitsSize(i), i);
    
    for(int j=0; j < getNumberBitsSize(i); j++){
        printf("%i", vector[j]);
    }

    printf("\n");
}
