//
//  ActivitiesViewModel.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 5/11/24.
//
//

import Foundation

class ActivitiesViewModel: ObservableObject {
    @Published var activities: [Activities] = []

    init() {
        loadActivities()
    }

    func loadActivities() {
        guard let fileURL = Bundle.main.url(forResource: "ActivitiesData", withExtension: "json") else {
            print("ActivitiesData.json not found")
            return
        }

        do {
            let data = try Data(contentsOf: fileURL)
            let decodedActivities = try JSONDecoder().decode([Activities].self, from: data)
        
            activities = decodedActivities
        } catch {
            print("Error loading activities: \(error)")
        }
        for index in 0..<activities.count {
                activities[index].isFavorite = loadFavoriteState(for: activities[index])
            }
    }

    
    func toggleFavorite(for activity: Activities) {
        if let index = activities.firstIndex(where: { $0.id == activity.id }) {
            activities[index].isFavorite.toggle()
            saveFavoriteState(for: activities[index])
        }
    }

    private func saveFavoriteState(for activity: Activities) {
        UserDefaults.standard.set(activity.isFavorite, forKey: "\(activity.id)_isFavorite")
    }

    private func loadFavoriteState(for activity: Activities) -> Bool {
        return UserDefaults.standard.bool(forKey: "\(activity.id)_isFavorite")
    }
}
