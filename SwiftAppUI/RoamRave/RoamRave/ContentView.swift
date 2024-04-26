//
//  ContentView.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 4/22/24.
//
// reference: https://sarunw.com/posts/swiftui-navigation-bar-color/#:~:text=To%20change%20a%20navigation%20bar%20color%20in%20SwiftUI%2C%20you%20apply,the%20background%20of%20the%20bar.

import SwiftUI
import MapKit

struct ContentView: View {
    
    @Binding var city: String
    
    let skyBlue = Color(red: 0.4627, green: 0.8392, blue: 1.0)
    let babyPink = Color(red: 0.9961, green: 0.7373, blue: 1.0) //    254, 188, 255
    
    var body: some View {
        NavigationView {
            VStack {
                Spacer().frame(height: 25)
                Text(city)
                    .font(.largeTitle)
                MapView()
                    .frame(height: 350)
                
                List {
                    Text("Location 1")
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
                .toolbarBackground(
                    skyBlue,
                    for: .navigationBar)
                .toolbarBackground(.visible, for: .navigationBar)
            }
            .font(.custom("text", size: 30))
        } .navigationBarBackButtonHidden(true)
    }
}

#Preview {
    ContentView(city: .constant("Downtown Seattle"))
}
