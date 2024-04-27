//
//  FormsView.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 4/26/24.
//

import SwiftUI

struct FormsView: View {
    
    let skyBlue = Color(red: 0.4627, green: 0.8392, blue: 1.0)
    let babyPink = Color(red: 0.9961, green: 0.7373, blue: 1.0)
    
    var body: some View {
        NavigationView {
            ScrollView {
                VStack {
                    Spacer().frame(height: 25)
                    VStack{
                        ZStack{
                            Link("Suggest Google Form", destination: URL(string: "https://docs.google.com/forms/d/e/1FAIpQLSfef7lCeuM_tIP24sY9Hw2oLF-35ELGNfP9BORXrafSGBMuqg/viewform?usp=sf_link")!)
                                .padding()
                                .frame(width: 326)
                        }
                        .background(skyBlue)
                        .foregroundColor(.black)
                        .cornerRadius(10)
                        .padding()
                        
                        ZStack{
                            Text("Fill out the form above with information about your favorite places in your city and our travel experts will review your suggestions!!!")
                                .padding()
                                .font(.custom("text", size: 28))
                                .frame(width: 325)
                        }.background(babyPink)
                            .cornerRadius(10)
                            .padding()
                    }
                    
                    Spacer().frame(height: 50)
                    
                    VStack{
                        ZStack{
                            Link("Review Google Form", destination: URL(string: "https://docs.google.com/forms/d/e/1FAIpQLSfxP0GzA1x7GnxBsIIL8p7QwmpWlYkxxJSlmTNiumEAlGRHZg/viewform?usp=sf_link")!)
                                .padding()
                                .frame(width: 325)
                        }
                        .background(skyBlue)
                        .foregroundColor(.black)
                        .cornerRadius(10)
                        .padding()
                        
                        ZStack{
                            Text("Fill out the form above with your thoughts on this App. include your like, dislikes, if anything seems broken, or anything else you want to share with our development team!")
                                .padding()
                                .font(.custom("text", size: 28))
                                .frame(width: 325)
                        } .background(babyPink)
                            .cornerRadius(10)
                            .padding()
                    }
                    
                }
                .navigationTitle("")
                .navigationBarItems(leading:
                    HStack {
                        NavigationLink{
                            Menu()
                        } label: {
                            Image("NavIcon")
                                .resizable()
                                .scaledToFit()
                                .frame(width: 80, height: 80)
                                .padding(.leading, -10)
                        }
                        Spacer()
                        Text("RoamRave")
                        .foregroundColor(.black)
                            .bold(true)
                            .padding(.leading, 30)
                    }
                )
                .toolbarColorScheme(.dark, for: .navigationBar)
                .toolbarBackground(skyBlue, for: .navigationBar)
                .toolbarBackground(.visible, for: .navigationBar)
            }
            
            .font(.custom("text", size: 30))
        } 
        .navigationBarBackButtonHidden(true)
    }
}

#Preview {
    FormsView()
}
