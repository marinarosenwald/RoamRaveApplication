//
//  Menu.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 4/24/24.
//

import SwiftUI

struct Menu: View {
    
    let skyBlue = Color(red: 0.4627, green: 0.8392, blue: 1.0)
    let babyPink = Color(red: 0.9961, green: 0.7373, blue: 1.0) //    254, 188, 255
//    let city = UserDefaults.standard.string(forKey: "city")
    @AppStorage ("city") private var city = "Downtown Seattle"
//    @State private var city = "Downtown Seattle"
    @State private var isPopoverPresented = false
    @State private var selectedOptionIndex = 0
    let options = ["Downtown Seattle", "Bellevue", "Redmond"]
    
    var body: some View {
        NavigationView {
            VStack {
                ZStack{
                    Rectangle()
                        .fill(babyPink)
                        .frame(width: 300, height: 100)
                        .cornerRadius(10)
                        .padding()
                    Picker("", selection: $selectedOptionIndex) {
                        ForEach(0..<options.count, id: \.self) { index in
                            Text(options[index])
                                .tag(index)
                        }
                    }
                    .onChange(of: selectedOptionIndex) {
                        city = options[selectedOptionIndex]
                    }
                    .pickerStyle(MenuPickerStyle())
                    .accentColor(.black)
                    .scaleEffect(1.6)
                    .padding() 
                }
                
                NavigationLink(destination: ContentView(city: $city)) {
                    Text("Suggestions")
                        .foregroundColor(Color.black)
                        .frame(width: 275, height: 70)
                        .padding()
                        .background(skyBlue)
                        .cornerRadius(10)
                }
                
                NavigationLink(destination: MapView()) {
                    Text("Forms")
                        .foregroundColor(Color.black)
                        .frame(width: 275, height: 70)
                        .padding()
                        .background(skyBlue)
                        .cornerRadius(10)
                }
                
                NavigationLink(destination: MapView()) {
                    Text("Favorites")
                        .foregroundColor(Color.black)
                        .frame(width: 275, height: 70)
                        .padding()
                        .background(skyBlue)
                        .cornerRadius(10)
                }
                NavigationLink(destination: MapView()) {
                    Text("Memories")
                        .foregroundColor(Color.black)
                        .frame(width: 275, height: 70)
                        .padding()
                        .background(skyBlue)
                        .cornerRadius(10)
                }
                
                .navigationTitle("")
                .navigationBarItems(leading:
                    HStack {
                        Image("VertNavIcon")
                            .resizable()
                            .scaledToFit()
                            .frame(width: 80, height: 80)
                            .padding(.leading, -10)
                        
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
            .onAppear {
                if let index = options.firstIndex(of: city) {
                    selectedOptionIndex = index
                }
            }
        } . navigationBarBackButtonHidden(true)
    }
}

#Preview {
    Menu()
}
