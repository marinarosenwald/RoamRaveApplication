//
//  Menu.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 4/24/24.
//

import SwiftUI
import MapKit

struct Menu: View {
    @EnvironmentObject var viewModel: ActivitiesViewModel
    
    let skyBlue = Color(red: 0.4627, green: 0.8392, blue: 1.0)
    let babyPink = Color(red: 0.9961, green: 0.7373, blue: 1.0)

    @AppStorage("city") private var city = "Downtown Seattle"
    @State private var latitude: Double = 47.6062
    @State private var longitude: Double = -122.335

    @State private var selectedOptionIndex = 0
    let options = ["Downtown Seattle", "Bellevue", "Redmond"]
    
    var body: some View {
        NavigationView {
            VStack {
                ZStack {
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
                        updateCoordinates(city: city)
                    }
                    .pickerStyle(MenuPickerStyle())
                    .accentColor(.black)
                    .scaleEffect(1.6)
                    .padding()
                }
                
                NavigationLink(destination: ContentView(city: $city, lat: $latitude, long: $longitude)) {
                    Text("Suggestions")
                        .foregroundColor(Color.black)
                        .frame(width: 275, height: 70)
                        .padding()
                        .background(skyBlue)
                        .cornerRadius(10)
                }
                
                NavigationLink(destination: FormsView()) {
                    Text("Forms")
                        .foregroundColor(Color.black)
                        .frame(width: 275, height: 70)
                        .padding()
                        .background(skyBlue)
                        .cornerRadius(10)
                }
                
                NavigationLink(destination: Favorites()) {
                    Text("Favorites")
                        .foregroundColor(Color.black)
                        .frame(width: 275, height: 70)
                        .padding()
                        .background(skyBlue)
                        .cornerRadius(10)
                }
                
                NavigationLink(destination: Memories()) {
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
                .toolbarBackground(skyBlue, for: .navigationBar)
                .toolbarBackground(.visible, for: .navigationBar)
            }
            .font(.custom("text", size: 30))
            .onAppear {
                if let index = options.firstIndex(of: city) {
                    selectedOptionIndex = index
                }
            }
        }
        .navigationBarBackButtonHidden(true)
    }
    
    func updateCoordinates(city: String) {
        // Update latitude and longitude based on the selected city
        switch city {
        case "Downtown Seattle":
            latitude = 47.6062
            longitude = -122.335
        case "Bellevue":
            latitude = 47.61580
            longitude = -122.19995
        case "Redmond":
            latitude = 47.67302
            longitude = -122.12105
        default:
            break
        }
    }
}

#Preview {
    Menu()
}
