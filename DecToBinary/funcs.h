#include <stdio.h>

int getNumberBitsSize(int number);
void reverse(int arr[], int size);


int getNumberBitsSize(int number){
    int counter=0;
    do{
        //printf("%i", number % 2);
        number /= 2;
        counter++;

    }while(number != 0);
    return counter;
}

void reverse(int arr[], int size){
    int aux[size];
    
    for(int i=0; i < size; i++){
        aux[size-1-i] = arr[i];
    }
    for(int j=0;j < size; j++){
        arr[j] = aux[j];
    }
}
