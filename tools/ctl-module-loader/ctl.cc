/* Copyright (C) Core Tech Labs, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Rudy Jessop <rudyjessop@gmail.com>, November 2015
 */

// #include <windows.h>
#include <fstream>
#include <string>
#include <iostream>

using namespace std;

int main(){

  // Declarations
  string build;
  string license;
  string userImput;
  bool confirmation();

  // Variables
  build = "Thank you for using Core Tech Labs Canvas UI Module Loader.";
  license = "\nCTL Module Loader is a Preparatory Software which is not for reuse. Built Soley for the use with Canvas UI.";

  //Interactions
  cout << build+license << endl;
  cout << "Enter the React Class Name" << endl;
  cin >> userImput;
  cout << "Are you Sure you want to name your React Module Class " << userImput << "?" << endl;
  cin >> confirmation();
  return 0;
}

//
bool confirmation(){
  if(confirm == true ){
    cout << "" << endl;
  }else{
    cout << "" << endl;
  }
  return confirm;
}
