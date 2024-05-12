
//
//  ActivityDetails.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 4/27/24.
//

import SwiftUI

struct ActivityDetails: View {
//    var activity: Activities
    @State var activity: Activities
    @EnvironmentObject var viewModel: ActivitiesViewModel

    let skyBlue = Color(red: 0.4627, green: 0.8392, blue: 1.0)
    let babyPink = Color(red: 0.9961, green: 0.7373, blue: 1.0)
    
    var body: some View {
        NavigationView {
            ScrollView {
                
                VStack(alignment: .leading) {
                    Spacer().frame(height: 10)
                    HStack{
                        VStack(alignment: .leading){
                            Text(activity.name)
                                .font(.title)
                            
                            HStack {
                                Text(activity.city)
                            }
                            .font(.subheadline)
                            .foregroundStyle(.secondary)
                        }
                        Button(action: {
                            viewModel.toggleFavorite(for: activity)
                            activity.isFavorite.toggle()
                            print(activity.isFavorite)
                        }) {
                            Image(activity.isFavorite ? "FilledHeart" : "EmptyHeart")
                                .resizable()
                                .scaledToFit()
                                .frame(width: 30, height: 30)
                                .padding(.bottom, 10)
                                .padding(.leading, 10)
                        }
                    }
                }
                CloseMapView(coordinate: activity.locationCoordinate)
                    .frame(height: 300)
                
                VStack{
                    ZStack{
                        Rectangle()
                            .fill(babyPink)
                            .frame(width: 350, height: 50)
                            .cornerRadius(10)
                        Text(activity.category)
                            .font(/*@START_MENU_TOKEN@*/.title/*@END_MENU_TOKEN@*/)
                    }
                    ZStack{
                        Text(activity.description)
                            .padding()
                    }
                    .background(babyPink)
                    .frame(width: 350)
                    .cornerRadius(10)
                    
                }
                .padding()

            }
            .font(.custom("text", size: 30))
            .background(Color.white)
        }
        .navigationBarTitleDisplayMode(.inline)
        .navigationBarBackButtonHidden(false)
    }
    
    
//    private func toggleFavorite() {
//        // Update the activities array with the modified activity
//        if let index = activities.firstIndex(where: { $0.id == activity.id }) {
//            activities[index].isFavorite.toggle()
//            activity.isFavorite.toggle()
//
//            // Encode the updated data
//            let encoder = JSONEncoder()
//            encoder.outputFormatting = .prettyPrinted
//            if let updatedData = try? encoder.encode(activities),
//               let fileURL = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first?.appendingPathComponent("ActivitiesData.json") {
//                do {
//                    try updatedData.write(to: fileURL)
//                    print("Updated data saved to 'ActivitiesData.json'")
//                } catch {
//                    print("Error saving updated data: \(error)")
//                }
//            }
//        }
//    }

}

#Preview {
    ActivityDetails(activity: activities[2])
}
