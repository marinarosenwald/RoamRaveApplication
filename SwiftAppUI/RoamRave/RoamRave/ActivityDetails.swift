//
//  ActivityDetails.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 4/27/24.
//

import SwiftUI

struct ActivityDetails: View {
    var activity: Activities

    let skyBlue = Color(red: 0.4627, green: 0.8392, blue: 1.0)
    let babyPink = Color(red: 0.9961, green: 0.7373, blue: 1.0)
    
    var body: some View {
        ScrollView {

            VStack(alignment: .leading) {
                Text(activity.name)
                    .font(.title)
                
                HStack {
                    Text(activity.city)
                }
                .font(.subheadline)
                .foregroundStyle(.secondary)
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
        .navigationBarTitleDisplayMode(.inline)
    }
}

#Preview {
    ActivityDetails(activity: activities[1])
}
