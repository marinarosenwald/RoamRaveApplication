//
//  Activities.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 4/27/24.
//

import Foundation
import SwiftUI
import CoreLocation

struct Activities: Hashable, Codable, Identifiable {
    var id: Int
    var name: String
    var state: String
    var city: String
    var description: String
    var category: String
    var isFavorite: Bool
    
    private var coordinates: Coordinates
    var locationCoordinate: CLLocationCoordinate2D {
        CLLocationCoordinate2D(
            latitude: coordinates.latitude,
            longitude: coordinates.longitude)
    }

    struct Coordinates: Hashable, Codable {
        var latitude: Double
        var longitude: Double
    }
}
