//
//  Favorites.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 4/27/24.
//

import SwiftUI

struct Favorites: View {
    var body: some View {
        NavigationSplitView {
            List {
                ForEach(activities.filter { $0.isFavorite }) { activity in
                    NavigationLink(destination: ActivityDetails(activity: activity)) {
                        ActivitiesRow(activity: activity)
                    }
                }
            }
            .navigationTitle("Favorites")
        } detail: {
            Text("Select an activity")
        }
    }
}


#Preview {
    Favorites()
}
