//
//  MemoryDetail.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 5/11/24.
//

import SwiftUI

struct MemoryDetail: View {
    let memory: Memory

    let skyBlue = Color(red: 0.4627, green: 0.8392, blue: 1.0)
    let babyPink = Color(red: 0.9961, green: 0.7373, blue: 1.0)
    
    var body: some View {
        VStack {
            Spacer().frame(height: 25)
            Text(memory.title)
                .font(.title)
                .padding()

            // Display memory photos
            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 10) {
                    ForEach(memory.photos, id: \.self) { photoURLString in
                        if let photoURL = URL(string: photoURLString),
                           let imageData = try? Data(contentsOf: photoURL),
                           let uiImage = UIImage(data: imageData) {
                            Image(uiImage: uiImage)
                                .resizable()
                                .scaledToFit()
                                .frame(width: 200, height: 200)
                        } else {
                            Image(systemName: "photo")
                                .resizable()
                                .scaledToFit()
                                .frame(width: 200, height: 200)
                                .foregroundColor(.gray)
                                .overlay(Text("Photo Placeholder").foregroundColor(.white))
                        }
                    }
                }
                .padding()
            }
            Text(memory.summary)
                .foregroundColor(Color.black)
                .frame(width: 300, alignment: .leading)
                .padding()
                .background(babyPink)
                
            Spacer()
            
        }
    }
}
#Preview {
    MemoryDetail(memory: Memory(id: "1", title: "Example Memory", summary: "This is a sample memory", photos: []))
}
