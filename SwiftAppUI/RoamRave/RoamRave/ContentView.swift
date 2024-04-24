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
    let skyBlue = Color(red: 0.4627, green: 0.8392, blue: 1.0)
    var body: some View {
        NavigationView {
            VStack {
                Spacer().frame(height: 25)
                Text("Downtown Seattle")
                MapView(coordinate: CLLocationCoordinate2D(latitude: 47.6062, longitude: -122.3321))
                
                List {
                    Text("Hello, SwiftUI!")
                }
                .navigationTitle("")
                .toolbar {
                    Text("Roam Rave")
                    Button("Add") {}
                }
                .toolbarColorScheme(.dark, for: .navigationBar)
                .toolbarBackground(
                    skyBlue,
                    for: .navigationBar)
                .toolbarBackground(.visible, for: .navigationBar)
            }
            .font(.custom("text", size: 30))
        }
    }
}

// MapView component
struct MapView: UIViewRepresentable {
    let coordinate: CLLocationCoordinate2D
    
    func makeUIView(context: Context) -> MKMapView {
        let mapView = MKMapView()
        mapView.setRegion(MKCoordinateRegion(center: coordinate, latitudinalMeters: 1000, longitudinalMeters: 1000), animated: true) // Set the initial region
        return mapView
    }

    func updateUIView(_ uiView: MKMapView, context: Context) {
        // Update the view
    }
}

#Preview {
    ContentView()
}
