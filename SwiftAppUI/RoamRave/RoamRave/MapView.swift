//
//  MapView.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 4/23/24.
//

import SwiftUI
import MapKit

struct MapView: View {
    var coordinate: CLLocationCoordinate2D


    var body: some View {
        Map(position: .constant(.region(region)))
    }


    private var region: MKCoordinateRegion {
        MKCoordinateRegion(
            center: coordinate,
            span: MKCoordinateSpan(latitudeDelta: 0.01, longitudeDelta: 0.01)
        )
    }
}


#Preview {
    MapView(coordinate: CLLocationCoordinate2D(latitude: 47.6062, longitude: -122.335))
}

//struct MapView: View {
//    var body: some View {
//        Map(initialPosition: .region(region))
//    }
//
//
//    private var region: MKCoordinateRegion {
//        MKCoordinateRegion(
//            center: CLLocationCoordinate2D(latitude: 47.6062, longitude: -122.335),
//            span: MKCoordinateSpan(latitudeDelta: 0.01, longitudeDelta: 0.01)
//        )
//    }
//}
//
//
//#Preview {
//    MapView()
//}
