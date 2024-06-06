
//
//  ActivityDetails.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 4/27/24.
//

import SwiftUI

struct ActivityDetails: View {
    @EnvironmentObject var viewModel: ActivitiesViewModel
    var activity: Activities

    let skyBlue = Color(red: 0.4627, green: 0.8392, blue: 1.0)
    let babyPink = Color(red: 0.9961, green: 0.7373, blue: 1.0)

    var body: some View {
        ScrollView {
            VStack(alignment: .leading) {
                Spacer().frame(height: 10)
                HStack {
                    VStack(alignment: .leading) {
                        Text(activity.name)
                            .font(.title)
                        HStack {
                            Text(activity.city)
                        }
                        .font(.subheadline)
                        .foregroundStyle(.secondary)
                    }
                    Button(action: {
                        // Toggle favorite status
                        viewModel.toggleFavorite(for: activity)
                    }) {
                        Image(systemName: activity.isFavorite ? "heart.fill" : "heart")
                            .resizable()
                            .scaledToFit()
                            .frame(width: 30, height: 30)
                            .padding(.bottom, 10)
                            .padding(.leading, 10)
                            .foregroundColor(activity.isFavorite ? .red : .gray)
                    }
                }
            }
            CloseMapView(coordinate: activity.locationCoordinate)
                .frame(height: 300)

            VStack {
                ZStack {
                    Rectangle()
                        .fill(babyPink)
                        .frame(width: 350, height: 50)
                        .cornerRadius(10)
                    Text(activity.category)
                        .font(.title)
                }
                ZStack {
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
        .navigationBarTitleDisplayMode(.inline)
        .navigationBarBackButtonHidden(false)
    }
}
