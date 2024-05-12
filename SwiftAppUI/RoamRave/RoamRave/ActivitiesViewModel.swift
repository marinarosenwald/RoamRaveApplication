//
//  ActivitiesViewModel.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 5/11/24.
//

import Foundation

class ActivitiesViewModel: ObservableObject {
    @Published var activities: [Activities] = []

    init() {
        loadActivitiesData()
    }

    private func loadActivitiesData() {
        // Load data from the JSON file (ActivitiesData.json)
        if let url = Bundle.main.url(forResource: "ActivitiesData", withExtension: "json") {
            do {
                let data = try Data(contentsOf: url)
                let decoder = JSONDecoder()
                activities = try decoder.decode([Activities].self, from: data)
                print("Loaded \(activities.count) activities")
            } catch {
                print("Error loading data: \(error)")
            }
        }
    }

    func toggleFavorite(for activity: Activities) {
        if let index = activities.firstIndex(where: { $0.id == activity.id }) {
            activities[index].isFavorite.toggle()
            saveActivitiesData()
        }
    }

    private func saveActivitiesData() {
        // Encode the updated data and write it back to the JSON file
        let encoder = JSONEncoder()
        encoder.outputFormatting = .prettyPrinted
        if let updatedData = try? encoder.encode(activities),
           let fileURL = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first?.appendingPathComponent("ActivitiesData.json") {
            do {
                try updatedData.write(to: fileURL)
                print("Updated data saved to 'ActivitiesData.json'")
            } catch {
                print("Error saving updated data: \(error)")
            }
        }
    
        
        if let fileURL = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first?.appendingPathComponent("ActivitiesData.json") {
            do {
                let data = try Data(contentsOf: fileURL)
                let decodedActivities = try JSONDecoder().decode([Activities].self, from: data)
                print("Loaded activities from file: \(decodedActivities)")
            } catch {
                print("Error reading data from file: \(error)")
            }
        }
    }

}
